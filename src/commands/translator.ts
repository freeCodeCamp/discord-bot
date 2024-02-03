import { SlashCommandBuilder } from "discord.js";

import { Languages } from "../config/Languages";
import { Command } from "../interfaces/Command";
import { errorHandler } from "../utils/errorHandler";

export const translator: Command = {
  data: new SlashCommandBuilder()
    .setName("translator")
    .setDescription("Select a language you are interested in translating.")
    .setDMPermission(false)
    .addStringOption((option) =>
      option
        .setName("language")
        .setDescription(
          "The language you would like to add or remove from your list."
        )
        .setRequired(true)
        .setAutocomplete(true)
    ),
  run: async (bot, interaction) => {
    try {
      await interaction.deferReply({ ephemeral: true });

      const lang = interaction.options
        .getString("language", true)
        .toLowerCase();
      const isValidLang = Languages.find((l) => l.toLowerCase() === lang);
      const isValidRole = bot.homeGuild.roles.cache.find(
        (r) => r.name.toLowerCase() === lang
      );
      if (!isValidLang) {
        await interaction.editReply({
          content: `I'm so sorry, but ${lang} isn't something we're translating right now. :c`,
        });
        return;
      }
      if (!isValidRole) {
        await interaction.editReply({
          content: `Oh dear, there's no role for ${lang}! Please notify <@!465650873650118659>. :c`,
        });
        return;
      }

      const hasRole = interaction.member.roles.cache.has(isValidRole.id);
      if (hasRole) {
        await interaction.member.roles.remove(isValidRole.id);
        await interaction.editReply(
          `I have removed you from the ${lang} group, but I hope you come back soon!`
        );
        return;
      }
      await interaction.member.roles.add(isValidRole.id);
      await interaction.editReply(`Yay! You're now in the ${lang} group! :3`);
    } catch (err) {
      await errorHandler(bot, err);
    }
  },
};
