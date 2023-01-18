import subprocess

from aiohttp.web import middleware


def get_ssl_context():
    ...

def get_csrf_token():
    ...

@middleware
async def csrf_middleware(request, handler):
    ...

# Get the user by checking for the first logged in user. As this is run
# by systemd at startup the process is likely to start before the user
# logs in, so we will wait here until they are available. Note that
# other methods such as getenv wont work as there was no $SUDO_USER to
# start the systemd service.
def set_user():
    ...

# Get the global user. get_user must be called first.
def get_user() -> str:
    ...

#Get the user owner of the given file path.
def get_user_owner(file_path) -> str:
    ...

#Get the user group of the given file path.
def get_user_group(file_path) -> str:
    ...

# Set the global user group. get_user must be called first
def set_user_group() -> str:
    ...

# Get the group of the global user. set_user_group must be called first.
def get_user_group() -> str:
    ...

# Get the default home path unless a user is specified
def get_home_path(username = None) -> str:
    ...

# Get the default homebrew path unless a user is specified
def get_homebrew_path(home_path = None) -> str:
    ...
    # return str(home_path+"/homebrew")

# Download Remote Binaries to local Plugin
async def download_remote_binary_to_path(url, binHash, path) -> bool:
    ...

async def is_systemd_unit_active(unit_name: str) -> bool:
    ...

async def stop_systemd_unit(unit_name: str) -> subprocess.CompletedProcess:
    ...

async def start_systemd_unit(unit_name: str) -> subprocess.CompletedProcess:
    ...