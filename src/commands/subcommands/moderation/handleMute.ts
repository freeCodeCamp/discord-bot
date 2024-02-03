import { EmbedBuilder, PermissionFlagsBits } from "discord.js";

import { Subcommand } from "../../../interfaces/Subcommand";
import { sendModerationDm } from "../../../modules/sendModerationDm";
import { updateHistory } from "../../../modules/updateHistory";
import {
  calculateMilliseconds,
  isValidTimeUnit,
} from "../../../utils/calculateMilliseconds";
import { customSubstring } from "../../../utils/customSubstring";
import { errorHandler } from "../../../utils/errorHandler";

export const handleMute: Subcommand = {
  permissionValidator: (member) =>
    member.permissions.has(PermissionFlagsBits.ModerateMembers),
  execute: async (Bot, interaction) => {
    try {
      await interaction.deferReply();
      const { guild, member } = interaction;
      const target = interaction.options.getUser("target", true);
      const duration = interaction.options.getInteger("duration", true);
      const durationUnit = interaction.options.getString("unit", true);
      const reason = interaction.options.getString("reason", true);

      if (!isValidTimeUnit(durationUnit)) {
        await interaction.editReply({
          content: `I don't know what you mean by ${durationUnit}... :c`,
        });
        return;
      }

      const durationMilliseconds = calculateMilliseconds(
        duration,
        durationUnit
      );

      if (!durationMilliseconds) {
        await interaction.editReply({
          content: `I don't know what you mean by ${duration}${durationUnit}... :c`,
        });
        return;
      }

      if (durationMilliseconds > 2419200000) {
        await interaction.editReply({
          content:
            "I'm so sorry, but my RAM cannot hold a mute for longer than 1 month.",
        });
        return;
      }

      if (target.id === member.user.id) {
        await interaction.editReply("Why are you trying to punish yourself?");
        return;
      }
      if (target.id === Bot.user?.id) {
        await interaction.editReply("Wait, what did I do wrong? :c");
        return;
      }

      const targetMember = await guild.members
        .fetch(target.id)
        .catch(() => null);

      if (!targetMember) {
        await interaction.editReply("Oh... they've left, I think.");
        return;
      }

      const sentNotice = await sendModerationDm(
        Bot,
        "mute",
        target,
        guild.name,
        reason
      );

      await targetMember.timeout(durationMilliseconds, reason);

      await updateHistory(Bot, "mute", target.id);

      const muteEmbed = new EmbedBuilder();
      muteEmbed.setTitle("A user has been muted!");
      muteEmbed.setDescription(`They were muted by ${member.user.username}`);
      muteEmbed.addFields(
        {
          name: "Reason",
          value: customSubstring(reason, 1000),
        },
        {
          name: "Duration",
          value: `${duration} ${durationUnit}`,
        },
        {
          name: "User Notified?",
          value: String(sentNotice),
        }
      );
      muteEmbed.setTimestamp();
      muteEmbed.setAuthor({
        name: target.tag,
        iconURL: target.displayAvatarURL(),
      });
      muteEmbed.setFooter({
        text: `ID: ${target.id}`,
      });

      await Bot.config.mod_hook.send({ embeds: [muteEmbed] });

      await interaction.editReply({
        content: "All done! :3",
      });
    } catch (err) {
      await errorHandler(Bot, err);
      await interaction.editReply("Something went wrong.");
    }
  },
};
