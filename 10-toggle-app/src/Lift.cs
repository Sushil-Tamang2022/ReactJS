using System;
using System.Threading;

class LiftSimulation
{
    static void Main()
    {
        int totalFloors = 10;
        int currentFloor, destinationFloor;
        string direction = "";

        Console.WriteLine("Lift Simulation System");
        Console.Write("Enter current floor (0 to {0}): ", totalFloors);
        currentFloor = Convert.ToInt32(Console.ReadLine());

        Console.Write("Enter destination floor (0 to {0}): ", totalFloors);
        destinationFloor = Convert.ToInt32(Console.ReadLine());

        // Validate input
        if (currentFloor < 0 || currentFloor > totalFloors ||
            destinationFloor < 0 || destinationFloor > totalFloors)
        {
            Console.WriteLine("Invalid floor number!");
            return;
        }

        // If already on same floor
        if (currentFloor == destinationFloor)
        {
            Console.WriteLine("You are already on floor {0}.", currentFloor);
            return;
        }

        // Determine direction
        if (destinationFloor > currentFloor)
            direction = "Up";
        else
            direction = "Down";

        Console.WriteLine("\nLift moving {0}...", direction);

        // Move lift
        if (direction == "Up")
        {
            while (currentFloor < destinationFloor)
            {
                currentFloor++;
                Console.WriteLine("Lift is now at floor {0}", currentFloor);
                Thread.Sleep(1000); // wait 1 second to simulate movement
            }
        }
        else // direction == "Down"
        {
            while (currentFloor > destinationFloor)
            {
                currentFloor--;
                Console.WriteLine("Lift is now at floor {0}", currentFloor);
                Thread.Sleep(1000);
            }
        }

        Console.WriteLine("Lift has reached floor {0}.", destinationFloor);
    }
}
