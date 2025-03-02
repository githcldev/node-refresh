import asyncio

def async_call_later(seconds, callback):
    async def schedule():
        await asyncio.sleep(seconds)

        if asyncio.iscoroutinefunction(callback):
            await callback()
        else:
            callback()

    asyncio.ensure_future(schedule())

async def do_something_async():
    await asyncio.sleep(0.5)
    print('Now! async')

async def main():
    print('Scheduling...')

    async_call_later(3, do_something_async)
    async_call_later(3, lambda: print('Now!'))

    print('Waiting...')

    await asyncio.sleep(4)

# https://docs.python.org/3/library/asyncio-eventloop.html
loop = asyncio.run(main())
# loop = asyncio.get_event_loop()
# loop.run_until_complete(main())