# src/main.py

def main():
    win = """
      ___________
     '._==_==_=_.' 
     .-\\:      /-.
    | (|:.     |) |
     '-|:.     |-'
       \\::.    /
        '::. .'
          ) (
        _.' '._
       `"""""""`
    """

    print("Welcome to the treasure hunt game!\n")
    print("      _______")
    print("     //  $$ /|")
    print("    // $$  / |")
    print("   //_____/  |")
    print("  |          |")
    print("  |   __   |")
    print("  |  |__|  |")
    print("  |________|\n")

    print("You find yourself standing at the edge of the jungle, with two paths ahead of you:")
    print("1. This path leads through a dense thicket of thorns")
    print("2. This path seems to be clear and well-trodden")

    choice = input("Please make your choice (1 or 2): ")

    if choice == "1":
        print("\nYou push your way through the thicket, enduring scratches and cuts. You find a hidden cave.")
        print("1. Enter the cave")
        print("2. Continue on the path")
        choice = input("Your choice (1 or 2): ")

        if choice == "1":
            print("\nYou found the chest!!!\n")
            print(win)

    if choice == "2":
        print("\nYou follow the well-trodden path and come across a river.")
        print("1. Attempt to cross the river")
        print("2. Look for a different route")
        choice = input("Your choice (1 or 2): ")

        if choice == "1":
            print("\nYou could not cross the river... THE END")
        elif choice == "2":
            print("\nAfter years of searching you did not find the treasure chest... THE END")

if __name__ == "__main__":
    main()
