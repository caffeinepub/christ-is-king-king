import Runtime "mo:core/Runtime";

actor {
  type TokenInfo = {
    tokenSymbol : Text;
    contractAddress : Text;
    tokenSupply : Nat;
    websiteUrl : Text;
    twitterUrl : Text;
    telegramUrl : Text;
    coingeckoUrl : Text;
  };

  var visitorCount = 0;
  let tokenInfo : TokenInfo = {
    tokenSymbol = "$KING";
    contractAddress = "Cg8sn8q1Y6ZzMvqkhrgH8e2dM7CtsLmafjPiLrwwhh5K";
    tokenSupply = 140_000_000;
    websiteUrl = "https://christisking.io";
    twitterUrl = "https://twitter.com/christkingcoin";
    telegramUrl = "https://t.me/+0mj6KDb9L0lmOWM8";
    coingeckoUrl = "https://www.coingecko.com/en/coins/christ-is-king";
  };

  public shared ({ caller }) func visit() : async Nat {
    if (visitorCount >= 1000000) {
      Runtime.trap("This canister has reached its visitor limit. Please contact support.");
    };
    visitorCount += 1;
    visitorCount;
  };

  public query func getTokenInfo() : async TokenInfo {
    tokenInfo;
  };

  public query func getVisitorCount() : async Nat {
    visitorCount;
  };
};
