# Steam Deck HQ Decky plugin

<p align="center">
  <img src="https://github.com/CapitaineJSparrow/steam-deck-hq-plugin/raw/master/img.png" width="400" />
</p>

<p align="center">
<i>Plugin for Steam Deck that gives you access to the features of our Steam Deck HQ website, including game presentations, reviews, and performance profiles. It also allows you to customize your gaming experience by accessing Steam OS settings. It's still in development and not yet in Decky store.</i>
</p>

## Development

```bash
npm i -g pnpm
pnpm i
pnpm build
# Do a full reboot after this if you do it for the first time
rsync -a . deck@<DECKIP>:/home/deck/homebrew/plugins/sdhq
ssh deck@<DECKIP> "echo 'deck_root_password' | sudo -S systemctl restart plugin_loader"
```
