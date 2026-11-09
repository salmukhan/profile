# Asset sources

Where the third-party images used on the site come from. All were retrieved on 7 November 2026. They belong to their respective owners and are shown to illustrate the products listed in Professional Projects. Confirm reuse is acceptable before publishing.

The originals live in `Screenshots/<App>/` and `Logos/` (not committed); `npm run images` turns them into the web copies in `public/`.

## Revolut

- App identity: App Store id 932493382, "Revolut: send, spend, and save", seller Revolut Ltd, bundle id `com.revolut.revolut` (iTunes Lookup API, US storefront).
- Screenshots: current official iPhone screenshots from that listing (1206 × 2622), selected for transfers, payments and account activity. Stocks, crypto and card-design screens were left out.

  | File | Listing screenshot | Shows |
  |---|---|---|
  | `Screenshots/Revolut/1.png` | #6 | "Send money quickly & safely" |
  | `Screenshots/Revolut/2.png` | #4 | Account with upcoming payments and transactions |
  | `Screenshots/Revolut/3.png` | #2 | Account with a transfer between accounts |
  | `Screenshots/Revolut/4.png` | #8 | Account with a recurring transfer |
  | `Screenshots/Revolut/5.png` | #1 | Card ("Change the way you money") |

- Logo: `Logos/revolut_logo.png`, the listing's app icon (1024 × 1024).
- These are present-day screens, not the 2021–2023 UI; the card says so.

## Wire

- App identity: App Store id 930944768, "Wire • Secure Messenger", seller Wire Swiss GmbH, bundle id `com.wearezeta.zclient.ios`.
- Screenshots: current official iPhone screenshots (1242 × 2688).

  | File | Listing screenshot | Shows |
  |---|---|---|
  | `Screenshots/Wire/1.png` | #1 | Conversations list |
  | `Screenshots/Wire/2.png` | #2 | Group conversation with a shared file |
  | `Screenshots/Wire/3.png` | #4 | Audio and video conferencing |
  | `Screenshots/Wire/4.png` | #3 | Personal and work accounts in one app |

  Listing screenshot #5 (a dark-mode copy of #2) was left out.
- Logo: `Logos/wire_logo.png`, the listing's app icon (1024 × 1024).
- These are present-day screens; the card says so.

## Blocktrade (crypto exchange, not the trading-card marketplace)

- App identity: "Blocktrade: Invest in Crypto", seller Blocktrade S.A., bundle id `com.blocktrade.ios`, App Store id 1360294403. No longer on the App Store (lookup and listing return nothing; WalletScrutiny records an iOS launch on 30 October 2018 and a last release, 2.1.0, in December 2022).
- Screenshots: no verified iOS screenshots were found.
  - The Wayback Machine copy of the App Store listing (6 September 2022) links ten screenshots, but the images now served at those addresses show an unrelated mobile game, so none were used.
  - Android screenshots were not used.
- Used instead: mobile product visuals from Appunite's case study, https://www.appunite.com/projects/blocktrade (the platform of the pictured screens is not stated); the card captions them as such.

  | File | Source image |
  |---|---|
  | `Screenshots/Blocktrade/1.png` | "Blocktrade _ Hero Image.png" (2880 × 1620) |
  | `Screenshots/Blocktrade/2.png` | "Blocktrade _ Results Image.png" (2880 × 1800) |

  The case study's "Big Image" shows the web app and was left out.
- Logo: `Logos/blocktrade_logo.png`, the app icon from the archived App Store listing (1024 × 1024). It matches the icon WalletScrutiny shows for `com.blocktrade.ios` and the logo in the case-study visuals.

## Fergus (own work)

`Screenshots/Fergus/3.png` and `4.png` are excluded from the site in `scripts/optimize-images.mjs`: #3 contains an offensive mock reply about a named person, and #4 shows the start of the same mock "leadership board meeting" conversation.
