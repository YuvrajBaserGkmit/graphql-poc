/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("posts", "description", {
      type: Sequelize.TEXT,
      allowNull: true,
    });
    await queryInterface.changeColumn("comments", "content", {
      type: Sequelize.TEXT,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("posts", "description", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn("comments", "content", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
};
