---
layout: default
title: "Initializing the Engine: My First Post"
---

I finally got my Raspberry Pi set up for my embedded systems project. Here is how the final wiring looks:

![Raspberry Pi setup](/assets/images/github.png)

To connect to it headlessly, you need to find its IP address and SSH into it. Here is the bash command I used:

```bash
ssh pi@192.168.1.55

Once inside, I wrote a quick Python script to test the GPIO pins:

import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.OUT)

print("LED on")
GPIO.output(18, GPIO.HIGH)
time.sleep(1)

It worked perfectly on the first try!

#include <iostream>

int main() {
    std::cout << "The blog engine is online." << std::endl;
    return 0;
}