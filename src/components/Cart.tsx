"use client";

import { formatPrice } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

const Cart = () => {

  const itemCount = 0
  const fee = 1

  return (
    <Sheet>
      <SheetTrigger className='group -m-2 flex items-center p-2'>
        <ShoppingCart 
          aria-hidden='true'
          className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
        />
        <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
          0
        </span>
      </SheetTrigger>
      <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
        <SheetHeader className='space-y-2.5 pr-6'>
          <SheetTitle>Cart (0)</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className='flex w-full flex-col pr-6'>
              {/* TODO: cart logic */}
              Itens do carrinho
            </div>
            <div className='space-y-6 pr-6'>
              <Separator />

              <div className='space-y-1.5 pr-6'>
                <div className='flex'>
                  <span className='flex-1'>Shipping</span>
                  <span>Free</span>
                </div>

                <div className='flex'>
                  <span className='flex-1'>Taxa de transação</span>
                  <span>{formatPrice(fee)}</span>
                </div>

                <div className='flex'>
                  <span className='flex-1'>Total</span>
                  <span>{formatPrice(fee)}</span>
                </div>
              </div>

              <SheetFooter>
                <SheetTrigger asChild>
                  <Link href='/cart' className={buttonVariants({className: 'w-full'})}>Continuar para o checkout</Link>
                </SheetTrigger>
              </SheetFooter>

            </div>
          </>
        ): (
          <div className='flex h-full flex-col items-center justify-center space-y-1'>
            <div
              aria-hidden='true'
              className='relative mb-4 h-60 w-60 text-muted-foreground'>
              <Image 
                src='/hippo-empty-cart.png'
                fill 
                alt='carrinho vazio'
              />
            </div>

            <div className='text-xl font-semibold'>
              Seu carrinho está vazio
            </div>
            <SheetTrigger>
              <Link
                href='/products'
                className={buttonVariants({
                  variant: 'link',
                  size: 'sm',
                  className: 'text-sm text-muted-foreground'
                })}
              >
                Adicionar items ao seu carrinho
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;