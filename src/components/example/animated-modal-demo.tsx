"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../ui/animated-modal";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export function AnimatedModalDemo() {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Contact Us
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            📞
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
          <section id="contact" className="w-full py-12">
            <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
            <div className="mx-auto max-w-md space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Have a question or interested in our services? Fill out the form below and we&apos;ll be in touch.
                </p>
                <form className="flex flex-col gap-4">
                    <Input type="text" placeholder="Name" />
                    <Input type="email" placeholder="Email" />
                    <Textarea placeholder="Message" />
                    <Button type="submit" className="self-end">
                    Submit
                    </Button>
                </form>
                </div>
            </div>
        </section>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}