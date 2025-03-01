import csv
import json

# Function to convert CSV to key-value pair array
def csv_to_key_value_array(csv_file):
    key_value_array = []
    
    # Open the CSV file
    with open(csv_file, mode='r') as file:
        csv_reader = csv.DictReader(file)
        
        # Iterate through each row and append to the array as a dictionary
        for row in csv_reader:
            key_value_array.append(row)
    
    # Convert to JSON string to use in JavaScript
    json_data = json.dumps(key_value_array, indent=2)
    
    return json_data

# Example usage
csv_file_path = 'data.csv'
json_array = csv_to_key_value_array(csv_file_path)

# Print the JSON array (can be copied and used in JavaScript)
print(json_array)
