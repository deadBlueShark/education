# I. Basic Overview of Virtualization

## What is virtualization?
Virtualization is the creation of a virtual version from an actual version of an operating system, hardware, etc.

## How does virtualization work
Software called hypervisors allow us to create a virtual version from an actual version of hardware, software, etc.
Hypervisors can either sit on top of an operating system (like a laptop) or be installed directly onto hardware (like a server), the latter being how enterprises virtualize.

# II. Types of Hypervisors

## Hypervisors
The piece of software that enables virtualization is called a hypervisor, which is also known as a Virtual Machine Manager (VMM).
The hypervisor makes it possible to run more than one Virtual Machine at a time by using the same hardware resources.

## Types of hypervisors
### Type 1 hypervisor
The type 1 hypervisor directly runs on the hardware
### Type 2 hypervisor
The type 2 hypervisor exists on top of an existing operating system, called the host OS

# III. What Is Vagrant?
Vagrant is an open-source software product that is used to manage any development environment.
Using Vagrant, you can install any virtual OS using the CLI (Command Line Interface), run it, do some work, and shut it down.
Vagrant works with any virtualization engine, such as VirtualBox, VMware, libvirt (Linux) etc.

You need to have one of these virtualization engines for Vagrant to run a virtual OS.

```shell
sudo vagrant up --provider virtualbox
sudo vagrant up --provider vmware_desktop
```
