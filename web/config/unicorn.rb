# Set the working application directory
app_root="/ircsems/deployment/web"
working_directory "#{app_root}"

# Unicorn PID file location
pid "#{app_root}/tmp/pids/unicorn.pid"

# Path to logs
stderr_path "#{app_root}/log/unicorn.log"
stdout_path "#{app_root}/log/unicorn.log"

# Unicorn socket
listen "/tmp/unicorn.web.ircsems.sock"

# Number of processes
worker_processes 2

# Time-out
timeout 30
