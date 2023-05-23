const { getAllCountries } = require("./src/Controllers/countryController");
const { getActivities } = require("./src/Controllers/activityController");

describe("getAllCountries", () => {
  it("should return first country with attributes", async () => {
    const countries = await getAllCountries();

    expect(countries[0].id).toEqual(expect.any(String));
    expect(countries[0].name).toEqual(expect.any(String));
    expect(countries[0].flag).toEqual(expect.any(String));
    expect(countries[0].continent).toEqual(expect.any(String));
    expect(countries[0].area).toEqual(expect.any(Number));
    expect(countries[0].population).toEqual(expect.any(Number));
    expect(countries[0].activities).toEqual([]);
  });
});

describe("getActivities", () => {
  it("Should return activity with attributes", async () => {
    const activity = await getActivities();

    expect(activity[0].id).toEqual(expect.any(Number));
    expect(activity[0].name).toEqual(expect.any(String));
    expect(activity[0].difficulty).toEqual(expect.any(Number));
  });
});
