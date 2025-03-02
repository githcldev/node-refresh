import subprocess
def call_window_cmd_timeout():
    """
        Timeout works like max time for program to complete
        if it complete before timeout then program will move
        to next statement execution
    """
    print(0)
    # r = subprocess.run(['dir'], capture_output=True, text=True, shell=True)
    # r = subprocess.run(['echo', 'hello'], shell=True, timeout=30,
    #         capture_output=True)
    r = subprocess.run(['timeout', '/t', '3', '>NUL', '&&'
            ,'echo','"message after 3 sec"'        
        ], shell=True, timeout=5,
            capture_output=True)

    print(1)    # it printed after 3 secs
    print(
        f'''type(r)={type(r)}, 
        r.args={r.args}, 
        r.returncode={r.returncode}, 
        r.stdout={r.stdout}, 
        r.stderr={r.stderr}'''
    )

call_window_cmd_timeout()