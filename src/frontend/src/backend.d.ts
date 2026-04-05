import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface TokenInfo {
    tokenSupply: bigint;
    websiteUrl: string;
    telegramUrl: string;
    twitterUrl: string;
    tokenSymbol: string;
    coingeckoUrl: string;
    contractAddress: string;
}
export interface backendInterface {
    getTokenInfo(): Promise<TokenInfo>;
    getVisitorCount(): Promise<bigint>;
    visit(): Promise<bigint>;
}
