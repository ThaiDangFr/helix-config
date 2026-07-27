def process_users(users):
result = []
for user in users:
if user.get("active"):
name = user.get("name")
age = user.get("age", 0)
if age >= 18:
result.append({"name": name, "status": "adult"})
else:
result.append({"name": name, "status": "minor"})
return result

sample_data = [
{"name": "Alice", "age": 25, "active": True},
{"name": "Bob", "age": 15, "active": True}
]

print(process_users(sample_data))
