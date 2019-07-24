import { isBefore, isAfter, isEqual } from "../index";

describe("time compare", () => {
  describe("isBefore", () => {
    it("should be truthy if the time is before the comparison time", () => {
      expect(isBefore(new Date("10/10/2018"), new Date())).toBeTruthy();
    });

    it("should be falsy if the time is after the comparison time", () => {
      expect(isBefore(new Date("10/10/2019"), new Date())).toBeFalsy();
    });
  });

  describe("isAfter", () => {
    it("should be truthy if the time is after the comparison time", () => {
      expect(isAfter(new Date("10/10/2019"), new Date())).toBeTruthy();
    });

    it("should be falsy if the time is before the comparison time", () => {
      expect(isAfter(new Date("10/10/2018"), new Date())).toBeFalsy();
    });
  });

  describe("isEqual", () => {
    it("should be truthy if the two times are the same", () => {
      expect(
        isEqual(new Date("10/10/2019"), new Date("10/10/2019"))
      ).toBeTruthy();
    });
  });

  describe("granularity", () => {
    it("should only compare units inclusivly larger than the one specified", () => {
      /**
       * Test only years
       */
      expect(
        isEqual(new Date("10/10/2019"), new Date("11/11/2019"), "years")
      ).toBeTruthy();

      /**
       * Test years and months
       */
      expect(
        isEqual(new Date("10/10/2019"), new Date("11/10/2019"), "months")
      ).toBeTruthy();

      /**
       * Test years, months and days
       */
      expect(
        isEqual(new Date("10/10/2019"), new Date("10/10/2019"), "days")
      ).toBeTruthy();

      /**
       * Test years, months, days and hours
       */
      expect(
        isEqual(
          new Date("10/10/2019 10:14:17"),
          new Date("10/10/2019 10:11:12"),
          "hours"
        )
      ).toBeTruthy();

      /**
       * Test years, months, days, hours and minutes
       */
      expect(
        isEqual(
          new Date("10/10/2019 10:11:17"),
          new Date("10/10/2019 10:11:12"),
          "minutes"
        )
      ).toBeTruthy();

      /**
       * Test years, months, days, hours, minutes and seconds
       */
      expect(
        isEqual(
          new Date("10/10/2019 10:11:17"),
          new Date("10/10/2019 10:11:17"),
          "seconds"
        )
      ).toBeTruthy();

      /**
       * Test years, months, days, hours, minutes, seconds and milliseconds
       */
      expect(
        isEqual(
          new Date("10/10/2019 10:11:17:100"),
          new Date("10/10/2019 10:11:17:100")
        )
      ).toBeTruthy();
    });
  });
});
