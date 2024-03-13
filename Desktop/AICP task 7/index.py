import tkinter as tk
from tkinter import messagebox

def setup_charities():
    try:
        charity1_name.set(entry_charity1.get())
        charity2_name.set(entry_charity2.get())
        charity3_name.set(entry_charity3.get())
        update_charity_display()
    except Exception as e:
        messagebox.showerror("Error", str(e))

def update_charity_display():
    label_charity1.config(text=f"1. {charity1_name.get()}")
    label_charity2.config(text=f"2. {charity2_name.get()}")
    label_charity3.config(text=f"3. {charity3_name.get()}")

def process_donation():
    try:
        choice = int(charity_choice.get())

        if choice == -1:
            display_totals()
            return

        bill = float(bill_amount.get())
        donation = bill * 0.01
        add_donation_to_total(choice, donation)
    except ValueError:
        messagebox.showerror("Error", "Invalid input. Please enter numbers only.")

def add_donation_to_total(choice, donation):
    charity_name = ""
    if choice == 1:
        total_donations[0] += donation
        charity_name = charity1_name.get()
    elif choice == 2:
        total_donations[1] += donation
        charity_name = charity2_name.get()
    elif choice == 3:
        total_donations[2] += donation
        charity_name = charity3_name.get()
    else:
        messagebox.showerror("Error", "Invalid charity choice. Please enter 1, 2, or 3.")
        return

    messagebox.showinfo("Donation Processed", f"£{donation:.2f} has been donated to {charity_name}.")
    update_totals_display()

def display_totals():
    sorted_totals = sorted(
        [(charity1_name.get(), total_donations[0]),
         (charity2_name.get(), total_donations[1]),
         (charity3_name.get(), total_donations[2])],
        key=lambda x: x[1], reverse=True)

    grand_total = sum(total_donations)
    totals_message = "Charity Totals (in descending order):\n"
    totals_message += "\n".join([f"{name}: £{total:.2f}" for name, total in sorted_totals])
    totals_message += f"\n\nGRAND TOTAL DONATED TO CHARITY: £{grand_total:.2f}"

    messagebox.showinfo("Total Donations", totals_message)

def update_totals_display():
    label_total1.config(text=f"Total for {charity1_name.get()}: £{total_donations[0]:.2f}")
    label_total2.config(text=f"Total for {charity2_name.get()}: £{total_donations[1]:.2f}")
    label_total3.config(text=f"Total for {charity3_name.get()}: £{total_donations[2]:.2f}")

# GUI setup
root = tk.Tk()
root.title("Supermarket Charity Donation System")

charity1_name = tk.StringVar()
charity2_name = tk.StringVar()
charity3_name = tk.StringVar()
charity_choice = tk.StringVar()
bill_amount = tk.StringVar()
total_donations = [0, 0, 0]

# Charity setup
tk.Label(root, text="Enter Charity 1 Name:").pack()
entry_charity1 = tk.Entry(root)
entry_charity1.pack()
tk.Label(root, text="Enter Charity 2 Name:").pack()
entry_charity2 = tk.Entry(root)
entry_charity2.pack()
tk.Label(root, text="Enter Charity 3 Name:").pack()
entry_charity3 = tk.Entry(root)
entry_charity3.pack()
tk.Button(root, text="Setup Charities", command=setup_charities).pack()

# Display charity names
label_charity1 = tk.Label(root, text="1. ")
label_charity1.pack()
label_charity2 = tk.Label(root, text="2. ")
label_charity2.pack()
label_charity3 = tk.Label(root, text="3. ")
label_charity3.pack()

# Donation inputs
tk.Label(root, text="Enter Charity Number (1, 2, or 3):").pack()
tk.Entry(root, textvariable=charity_choice).pack()
tk.Label(root, text="Enter Bill Amount:").pack()
tk.Entry(root, textvariable=bill_amount).pack()
tk.Button(root, text="Process Donation", command=process_donation).pack()

# Display total donations
label_total1 = tk.Label(root, text="Total for Charity 1: £0.00")
label_total1.pack()
label_total2 = tk.Label(root, text="Total for Charity 2: £0.00")
label_total2.pack()
label_total3 = tk.Label(root, text="Total for Charity 3: £0.00")
label_total3.pack()

root.mainloop()