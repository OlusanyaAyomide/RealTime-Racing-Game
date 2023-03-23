#convert number to roman numerals
def number_to_numerals():
    number = int(input("Enter a number: "))
    numerals = ""
    while number > 0:
        if number >= 1000:
            numerals += "M"
            number -= 1000
        elif number >= 900:
            numerals += "CM"
            number -= 900
        elif number >= 500:
            numerals += "D"
            number -= 500
        elif number >= 400:
            numerals += "CD"
            number -= 400
        elif number >= 100:
            numerals += "C"
            number -= 100
        elif number >= 90:
            numerals += "XC"
            number -= 90
        elif number >= 50:
            numerals += "L"
            number -= 50
        elif number >= 40:
            numerals += "XL"
            number -= 40
        elif number >= 10:
            numerals += "X"
            number -= 10
        elif number >= 9:
            numerals += "IX"
            number -= 9
        elif number >= 5:
            numerals += "V"
            number -= 5
        elif number >= 4:
            numerals += "IV"
            number -= 4
        elif number >= 1:
            numerals += "I"
            number -= 1
    print(numerals)

