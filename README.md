# Steam Deck HQ Decky plugin

<p align="center">
  <img src="https://github.com/CapitaineJSparrow/steam-deck-hq-plugin/raw/master/img.png" width="400" />
</p>

<p align="center">
<i>This plugin add SteamOS and in-game settings based on Steam Deck HQ reviews. It's still in development and not yet in Decky store.</i>
</p>

## Development

```
npm i -g pnpm
pnpm i
pnpm build
rsync -a . deck@<DECKIP>:/home/deck/homebrew/plugins/sdhq # Do a full reboot if you do it for the first time
ssh deck@<DECKIP> "echo 'deck_root_password' | sudo -S systemctl restart plugin_loader"
```
