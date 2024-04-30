const request = require("supertest");

describe("PokeAPI Locations", () => {
  it("/get a valid Locations", async () => {
    const response = await request("https://pokeapi.co/api/v2").get(
      `/location/${"canalave-city"}`
    );
   // console.log(response.body);
    expect(response.body.id).toBeDefined();
    expect(response.status).toBe(200);
    expect(response.body.name).toBe("canalave-city");
    expect(response.body.areas.length).toBeGreaterThan(0);
  });

  it("/get a invalid location", async () => {
    const response = await request("https://pokeapi.co/api/v2").get(
      `/location/${"local-invalido"}`
    );

    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({});
    
  });
});

