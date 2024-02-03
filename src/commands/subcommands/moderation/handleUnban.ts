import { EmbedBuilder, PermissionFlagsBits } from "discord.js";

import { Subcommand } from "../../../interfaces/Subcommand";
import { updateHistory } from "../../../modules/updateHistory";
import { customSubstring } from "../../../utils/customSubstring";
import { errorHandler } from "../../../utils/errorHandler";

export const handleUnban: Subcommand = {
  permissionValidator: (member) =>
    member.permissions.has(PermissionFlagsBits.BanMembers),
  execute: async (Bot, interaction) => {
    try {
      await interaction.deferReply();
      const { guild, member } = interaction;
      const target = interaction.options.getUser("target", true);
      const reason = interaction.options.getString("reason", true);

      if (target.id === member.user.id) {
        await interaction.editReply(
          "How are you running this if you're banned?"
        );
        return;
      }
      if (target.id === Bot.user?.id) {
        await interaction.editReply(
          "I can't be banned, so no need to unban me. >:3"
        );
        return;
      }

      const targetBan = await guild.bans.fetch(target.id).catch(() => null);

      if (!targetBan) {
        await interaction.editReply(
          "Are you sure they're banned? I don't have a record of that..."
        );
        return;
      }

      await guild.bans.remove(target.id);

      await updateHistory(Bot, "unban", target.id);

      const banLogEmbed = new EmbedBuilder();
      banLogEmbed.setTitle("Member unban.");
      banLogEmbed.setDescription(
        `Member unban was requested by ${member.user.username}`
      );
      banLogEmbed.addFields([
        {
          name: "Reason",
          value: customSubstring(reason, 1000),
        },
      ]);
      banLogEmbed.setTimestamp();
      banLogEmbed.setAuthor({
        name: target.tag,
        iconURL: target.displayAvatarURL(),
      });
      banLogEmbed.setFooter({
        text: `ID: ${target.id}`,
      });

      await Bot.config.mod_hook.send({ embeds: [banLogEmbed] });
      await interaction.editReply({
        content: "All done~! :3",
      });
    } catch (err) {
      await errorHandler(Bot, err);
      await interaction.editReply("Something went wrong.");
    }
  },
};
