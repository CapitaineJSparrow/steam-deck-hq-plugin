# Steam Deck HQ Decky plugin

This plugin add SteamOS and in-game settings based on [Steam Deck HQ](https://steamdeckhq.com/) reviews.

## Development

```
npm i -g pnpm
pnpm i
pnpm build
rsync -a ./plugin deck@<DECKIP>:/home/deck/homebrew/plugins/sdhq # Do a full reboot if you do it for the first time
ssh deck@<DECKIP> "echo 'deck_root_password' | sudo -S systemctl restart plugin_loader"
```