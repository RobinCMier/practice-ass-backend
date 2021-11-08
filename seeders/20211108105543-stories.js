"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "One story for one time",
          content:
            "Once upon a time there was a aspiring JS dev who needed to make this assessment",
          imageUrl:
            "https://cdn.dribbble.com/users/518045/screenshots/2703062/media/816866f78df43104d90b84d5c395dc23.png?compress=1&resize=800x600",
          spaceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "First week of bootcamp",
          content:
            "The first week was all about collections of data and also how to build and start a server.",
          imageUrl:
            "https://image.freepik.com/free-vector/waiter-man-suit-holding-tray-white-background_269543-142.jpg",
          spaceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Second week of bootcamp",
          content:
            "Then the next week was react week! A lot of fun stuff about thinking in components and making a scoreboard..",
          imageUrl:
            "https://static.tvtropes.org/pmwiki/pub/images/high_scores.gif",
          spaceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Third week of bootcamp",
          content:
            "Database week. This week was no fun at first, but when the bigger picture was connected at the end, it all made sense!",
          imageUrl:
            "https://englishunite.com/wp-content/uploads/2021/08/suffix-librarian.jpg",
          spaceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
