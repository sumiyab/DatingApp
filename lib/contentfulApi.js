const space = process.env.NEXT_APP_SPACE_ID;
const accessToken = process.env.NEXT_APP_ACCESS_TOKEN;
const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});
export async function fetchEntries() {
  const entries = await client.getEntries();
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
  console.log(entries.items);
}

export default { fetchEntries };
