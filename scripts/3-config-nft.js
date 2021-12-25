import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xF31135851E8Fb7a7DfA52B1312541B4b945a8616"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Precious Loaf",
        description: "This NFT will unleash the yeast.",
        image: readFileSync("scripts/assets/bread.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
