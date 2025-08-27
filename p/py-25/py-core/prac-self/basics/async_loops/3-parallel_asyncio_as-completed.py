import asyncio


async def fetch_data(i):
    print(f"Fetching data for task {i}...")
    await asyncio.sleep(1)
    print(f"Task {i} completed!")
    return f"Result {i}"


async def main():
    tasks = [fetch_data(i) for i in range(5)]
    for completed_task in asyncio.as_completed(tasks):
        print(1)
        result = await completed_task
        print(2)
        print(result)


asyncio.run(main())
