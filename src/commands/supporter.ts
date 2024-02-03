import { readFile } from "fs/promises";
import { join } from "path";

import { SlashCommandBuilder } from "discord.js";

import { SupporterRoleId } from "../config/Supporter";
import { Command } from "../interfaces/Command";
import { errorHandler } from "../utils/errorHandler";
import { fetchLearnRecord } from "../utils/fetchLearnRecord";

export const supporter: Command = {
  data: new SlashCommandBuilder()
    .setName("supporter")
    .setDescription("Claim the supporter role.")
    .setDMPermission(false)
    .addStringOption((option) =>
      option
        .setName("email")
        .setDescription("The email tied to your freeCodeCamp account.")
        .setRequired(true)
    ),
  run: async (bot, interaction) => {
    try {
      await interaction.deferReply({ ephemeral: true });
      const email = interaction.options.getString("email", true);
      const { member } = interaction;
      if (member.roles.cache.has(SupporterRoleId)) {
        await interaction.editReply({
          content:
            "Darling, you're already a supporter! Your enthusiasm is great, but you can't be a supporter twice. :3",
        });
        return;
      }
      const existsByUserId = await bot.db.supporters.findUnique({
        where: {
          userId: member.id,
        },
      });
      if (existsByUserId) {
        await interaction.editReply({
          content:
            "It looks like your Discord account is already a supporter! If you don't have the role, reach out to <@!465650873650118659>",
        });
        return;
      }
      const existsByEmail = await bot.db.supporters.findUnique({
        where: {
          email,
        },
      });
      if (existsByEmail) {
        await interaction.editReply({
          content:
            "It looks like your email is already a supporter! If you don't have the role, reach out to <@!465650873650118659>",
        });
        return;
      }
      const learnRecord = await fetchLearnRecord(bot, email);
      if (!learnRecord) {
        await interaction.editReply({
          content: `There does not appear to be a learn account associated with ${email}. If you believe this is an error, please contact Naomi.`,
        });
        return;
      }
      if (!learnRecord.isDonating) {
        await interaction.editReply({
          content:
            "Hmmm, it looks like you aren't flagged as a supporter. Please reach out to <@!465650873650118659> if you think I am wrong! :3",
        });
        return;
      }
      await bot.db.supporters.create({
        data: {
          userId: member.id,
          email,
        },
      });
      await member.roles.add(SupporterRoleId);
      await interaction.editReply({
        content:
          "Congrats! You now have the supporter role, with access to special channels.",
      });
      const donorCTA2023 = await readFile(
        join(process.cwd(), process.env.EMAIL_LIST ?? "Naomi messed up."),
        "utf-8"
      );
      const isCTAMember = donorCTA2023.split("\n").includes(email);
      if (isCTAMember) {
        await member.roles.add("1186748788665225336");
      }
    } catch (err) {
      await errorHandler(bot, err);
    }
  },
};
