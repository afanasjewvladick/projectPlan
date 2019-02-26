'use strict';

class DeleteTask {
  constructor({ 
    logger, 
    taskModel,
  }) {
    this.logger = logger;
    this.taskModel = taskModel;
  }

  async execute(filter) {
    console.log('DeleteTask', filter);
    await this.taskModel.deleteOne(filter);
    return true;
  }
}

module.exports = DeleteTask;