const Discord = require("discord.js");
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {

  if (talkedRecently.has(message.author.id)) {
            
    let timeoute = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Please White 60Min !");
            message.channel.send(timeoute).then(msg => {msg.delete(506600)});
    } else {
      message.delete(9666000)
    let helpembed1 = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setDescription("~ أوامر بوت البروفايل ~")
    .setColor("RANDOM")
    
    .addField("wprofile", '● [لعرض البروفايل الخاص]')
    .addField("wcredits", '● [لعرض رصيدك في البنك]')
    .addField("wlvl", '● [لعرض لفلك او لفل شخص]')
    .addField("wbuy", '● [لشراء خلفية من المتجر 100 ريال]')
    .addField("wawsmah", '● [لعطاء شخص اوسمة]')
    .addField("w1", '● [لعرض متجر الخلفيات - صفحة رقم 1]')
    .addField("w2", '● [لعرض متجر الخلفيات - صفحة رقم 2]')
    .addField("wconvert", '● [تحويل مبلغ مالي لأحد الأعضاء]')
    .addField("wnot", '● [لكتابة كلام في خانة المعلومات 200 ريال]')
    .addField("wabout", '● [لعرض معلوماتك او معلومات شخص]')
    .addField("wlike", '● [للإعجاب بشخص داخل السيرفر كل 12 ساعة]')
    .addField("wrep", '● [اعطاء سمعه]')
    .addField("wrep2", '● [اعطاء سمعة]')
    .addField("wfan", '● [لمعرفة عدد الايكات]')
    .addField("wclub", '● [اكتب ناديك المفضل]')
    .addField("wcarer", '● [اكتب منصبك]')
  	.addField("wage", '● [اكتب عمرك]')
    .addField("wstudy", '● [اكتب تخصصك]')
  	.addField("wlife", '● [اكتب حكمتك]')
    .addField("wwords", '● [اكتب الي بخاطرك]')
  	.addField("wdream", '● [اكتب طموحك]')
    .addField("wmodel", '● [اكتب قدوتك]')
    .setFooter(`@${message.author.username} :المرسل`, message.author.displayAvatarURL);
    message.channel.send(helpembed1);
    }
  talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
}
module.exports.help = {
  name:"help"
}
