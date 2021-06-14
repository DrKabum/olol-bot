const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TopCommand extends BaseCommand {
  constructor() {
    super('top', 'dashboard', []);
  }

  run(client, message, args) {
    message.channel.send('top command works');
  }
}