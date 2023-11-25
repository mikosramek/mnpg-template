require("dotenv").config();

const { MNPG } = require("@mikosramek/mnpg");
const Config = require("./ConfigHolder");
const Gen = require("./Gen");

const client = new MNPG(Config.PRISMIC_REPO, Config.PRISMIC_REPO);

const getSchema = async () => {
  await client.createFragments(Gen.schemaPath);
};

getSchema();
