import asyncio

async def fetch_data(i):
    print(f"Fetching data for task {i}...")
    await asyncio.sleep(1)  # Simulate an I/O-bound task
    print(f"Task {i} completed!")
    return f"Result {i}"

async def main():
    for i in range(5):
        result = await fetch_data(i)
        print(result)

asyncio.run(main())