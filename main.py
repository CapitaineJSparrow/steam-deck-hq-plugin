import os
import sys
import urllib.request
import logging
import json
import ssl

sys.path.append(os.path.dirname(os.path.realpath(__file__))+"/py_modules")

logging.basicConfig(filename="/tmp/template.log",
                    format='[Template] %(asctime)s %(levelname)s %(message)s',
                    filemode='w+',
                    force=True)
logger=logging.getLogger()
logger.setLevel(logging.INFO) # can be changed to logging.DEBUG for debugging issues

def use_urllib(appid):
    api_url = f"https://steamdeckhq.com/wp-json/wp/v2/game-reviews/?meta_key=steam_app_id&meta_value={appid}"
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    request = urllib.request.Request(api_url, None, {'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(request, context=ctx) as response:
        data = json.loads(response.read().decode("utf-8"))
        return data

class Plugin:
    # A normal method. It can be called from JavaScript using call_plugin_function("method_1", argument1, argument2)
    async def get_sdhq_data(self, appid):
        return use_urllib(appid)

    # Asyncio-compatible long-running code, executed in a task when the plugin is loaded
    async def _main(self):
        logger.info("Hello World!")
    
    # Function called first during the unload process, utilize this to handle your plugin being removed
    async def _unload(self):
        logger.info("Goodbye World!")
        pass
