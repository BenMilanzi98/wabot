//jshint esversion:8
const execute = async (client,msg,args) => {
    // msg.delete(true);
    const chat=await msg.getChat();
    let commands =  client.commands;
    if(!args.length){
        let adminHelp = '🔱 *Administration*\n\n';
        let infoHelp = '🔱 *Info*\n\n';
        let pluginHelp = '🔱 *Plugins*\n\n';
        let groupHelp = '🔱 *Group*\n\n';
        let ReactionsHelp = '🔱 *Reactions*\n\n';
        commands.forEach((command) => {
            if(!command.isDependent){
                if(command.commandType === 'admin')
                    adminHelp += `✨ *${command.name} (${command.command})*  - ${command.description}\n`;
                if(command.commandType === 'info')
                    infoHelp += `✨ *${command.name} (${command.command})*  - ${command.description}\n`;
                if(command.commandType === 'plugin')
                    pluginHelp += `✨ *${command.name} (${command.command})*  - ${command.description}\n`;
                if(command.commandType === 'group')
                    groupHelp += `✨ *${command.name} (${command.command})*  - ${command.description}\n`;
                if(command.commandType === 'reactions')
                    ReactionsHelp += `✨ *${command.name} (${command.command})*  - ${command.description}\n`;
            }
                
        });
        let help = `${infoHelp}\n${pluginHelp}\n${groupHelp}\n${ReactionsHelp}\n${commands.get('help').help}`;
        await client.sendMessage(chat.id._serialized, help);
    }

    else if(commands.has(args[0])){
        await client.sendMessage(chat.id._serialized, commands.get(args[0]).help);
    }

    else {
        await client.sendMessage(chat.id._serialized, `No command with the name *${args[0]}*...`);
    }
    
};

module.exports = {
    name: 'help',
    description: 'get information about available commands',
    command: '!help',
    commandType: 'info',
    isDependent: false,
    help: 'To get more info use ```!help [command]```. Ex: ```!help ping```',
    execute};
