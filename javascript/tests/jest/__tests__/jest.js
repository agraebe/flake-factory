const moment = require("moment");

describe("Jest - Day of the Week Tests", () => {
  test("today is Mon || Tues || Wed || Thur", () => {
    const today = moment().format("dddd");
    expect(["Monday", "Tuesday", "Wednesday", "Thursday"]).toContain(today);
  });

  test("today is Friday", () => {
    const today = moment().format("dddd");
    expect(["Friday"]).toContain(today);
  });

  test("today is Saturday or Sunday", () => {
    const today = moment().format("dddd");
    expect(["Saturday", "Sunday"]).toContain(today);
  });
});
