import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
  "0xF31135851E8Fb7a7DfA52B1312541B4b945a8616"
);

(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    // Specify conditions.
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 50_000,
      maxQuantityPerTransaction: 1,
    });

    await bundleDrop.setClaimCondition(0, claimConditionFactory);
    console.log(
      "✅ Sucessfully set claim condition on bundle drop:",
      bundleDrop.address
    );
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})();
