import { EmbedBuilder, PermissionFlagsBits } from "discord.js";

import { Subcommand } from "../../../interfaces/Subcommand";
import { sendModerationDm } from "../../../modules/sendModerationDm";
import { updateHistory } from "../../../modules/updateHistory";
import { customSubstring } from "../../../utils/customSubstring";
import { errorHandler } from "../../../utils/errorHandler";

export const handleKick: Subcommand = {
  permissionValidator: (member) =>
    member.permissions.has(PermissionFlagsBits.KickMembers),
  execute: async (Bot, interaction) => {
    try {
      await interaction.deferReply();
      const { guild, member } = interaction;
      const target = interaction.options.getUser("target", true);
      const reason = interaction.options.getString("reason", true);

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

      if (!targetMember || !targetMember.kickable) {
        await interaction.editReply("Oh dear, I can't seem to kick them. :c");
        return;
      }

      const sentNotice = await sendModerationDm(
        Bot,
        "kick",
        target,
        guild.name,
        reason
      );

      await targetMember.kick(customSubstring(reason, 1000));

      await updateHistory(Bot, "kick", target.id);

      const kickLogEmbed = new EmbedBuilder();
      kickLogEmbed.setTitle("Member kicked.");
      kickLogEmbed.setDescription(
        `Member removal was requested by ${member.user.username}`
      );
      kickLogEmbed.addFields(
        {
          name: "Reason",
          value: customSubstring(reason, 1000),
        },
        {
          name: "User notified?",
          value: String(sentNotice),
        }
      );
      kickLogEmbed.setTimestamp();
      kickLogEmbed.setAuthor({
        name: target.tag,
        iconURL: target.displayAvatarURL(),
      });
      kickLogEmbed.setFooter({
        text: `ID: ${target.id}`,
      });

      await Bot.config.mod_hook.send({ embeds: [kickLogEmbed] });
      await interaction.editReply({ content: "All done! :3" });
    } catch (err) {
      await errorHandler(Bot, err);
      await interaction.editReply("Something went wrong.");
    }
  },
};
