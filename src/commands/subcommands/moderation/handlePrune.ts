import { ChannelType, PermissionFlagsBits } from "discord.js";

import { Subcommand } from "../../../interfaces/Subcommand";
import { errorHandler } from "../../../utils/errorHandler";

export const handlePrune: Subcommand = {
  permissionValidator: (member) =>
    [PermissionFlagsBits.ManageMessages].some((p) => member.permissions.has(p)),
  execute: async (Bot, interaction) => {
    try {
      await interaction.deferReply({ ephemeral: true });
      const { channel } = interaction;
      if (!channel || channel.type !== ChannelType.GuildText) {
        await interaction.editReply({
          content:
            "I can't prune messages from a channel that doesn't have messages!",
        });
        return;
      }
      const count = interaction.options.getInteger("count", true);
      const messages = await channel.messages.fetch({ limit: count });
      for (const msg of messages.values()) {
        await msg.delete().catch(() => null);
      }
      await interaction.editReply({
        content: `All done~! :3\nDeleted ${count} messages.`,
      });
    } catch (err) {
      await errorHandler(Bot, err);
      await interaction.editReply("Something went wrong.");
    }
  },
};
