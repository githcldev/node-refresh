import asyncio

async def fetch_data(i):
    print(f"Fetching data for task {i}...")
    await asyncio.sleep(1)
    print(f"Task {i} completed!")
    return f"Result {i}"

async def main():
    tasks = [fetch_data(i) for i in range(5)]
    results = await asyncio.gather(*tasks)
    print(results)

print('before asyncio.run')
asyncio.run(main())
print('after asyncio.run')

