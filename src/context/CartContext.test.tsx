import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { CartProvider, useCart } from './CartContext'
import { Product } from '@/types'

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => { store[key] = value }),
    removeItem: vi.fn((key: string) => { delete store[key] }),
    clear: vi.fn(() => { store = {} }),
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

const mockProduct: Product = {
  id: '1',
  name: 'Indomie Goreng',
  description: 'Mie goreng instant',
  price: 3500,
  image: '/images/indomie.jpg',
  category: 'Makanan',
  stock: 100,
}

const mockProduct2: Product = {
  id: '2',
  name: 'Teh Botol Sosro',
  description: 'Teh manis dalam botol',
  price: 5000,
  image: '/images/tehbotol.jpg',
  category: 'Minuman',
  stock: 50,
}

describe('CartContext', () => {
  beforeEach(() => {
    localStorageMock.clear()
    vi.clearAllMocks()
  })

  it('should start with empty cart', () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    })

    expect(result.current.items).toEqual([])
    expect(result.current.totalItems).toBe(0)
    expect(result.current.totalPrice).toBe(0)
  })

  it('should add product to cart', () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    })

    act(() => {
      result.current.addToCart(mockProduct)
    })

    expect(result.current.items).toHaveLength(1)
    expect(result.current.items[0].product.id).toBe('1')
    expect(result.current.items[0].quantity).toBe(1)
    expect(result.current.totalItems).toBe(1)
    expect(result.current.totalPrice).toBe(3500)
  })

  it('should increment quantity when adding same product', () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    })

    act(() => {
      result.current.addToCart(mockProduct)
      result.current.addToCart(mockProduct)
    })

    expect(result.current.items).toHaveLength(1)
    expect(result.current.items[0].quantity).toBe(2)
    expect(result.current.totalItems).toBe(2)
    expect(result.current.totalPrice).toBe(7000)
  })

  it('should add different products separately', () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    })

    act(() => {
      result.current.addToCart(mockProduct)
      result.current.addToCart(mockProduct2)
    })

    expect(result.current.items).toHaveLength(2)
    expect(result.current.totalItems).toBe(2)
    expect(result.current.totalPrice).toBe(8500)
  })

  it('should remove product from cart', () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    })

    act(() => {
      result.current.addToCart(mockProduct)
      result.current.addToCart(mockProduct2)
    })

    expect(result.current.items).toHaveLength(2)

    act(() => {
      result.current.removeFromCart('1')
    })

    expect(result.current.items).toHaveLength(1)
    expect(result.current.items[0].product.id).toBe('2')
    expect(result.current.totalPrice).toBe(5000)
  })

  it('should update quantity', () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    })

    act(() => {
      result.current.addToCart(mockProduct)
    })

    act(() => {
      result.current.updateQuantity('1', 5)
    })

    expect(result.current.items[0].quantity).toBe(5)
    expect(result.current.totalItems).toBe(5)
    expect(result.current.totalPrice).toBe(17500)
  })

  it('should remove item when quantity is set to 0', () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    })

    act(() => {
      result.current.addToCart(mockProduct)
    })

    act(() => {
      result.current.updateQuantity('1', 0)
    })

    expect(result.current.items).toHaveLength(0)
    expect(result.current.totalItems).toBe(0)
  })

  it('should remove item when quantity is negative', () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    })

    act(() => {
      result.current.addToCart(mockProduct)
    })

    act(() => {
      result.current.updateQuantity('1', -1)
    })

    expect(result.current.items).toHaveLength(0)
  })

  it('should clear cart', () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    })

    act(() => {
      result.current.addToCart(mockProduct)
      result.current.addToCart(mockProduct2)
    })

    expect(result.current.items).toHaveLength(2)

    act(() => {
      result.current.clearCart()
    })

    expect(result.current.items).toHaveLength(0)
    expect(result.current.totalItems).toBe(0)
    expect(result.current.totalPrice).toBe(0)
  })

  it('should calculate total correctly with multiple items', () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    })

    act(() => {
      result.current.addToCart(mockProduct) // 3500 x 1
      result.current.addToCart(mockProduct) // 3500 x 2
      result.current.addToCart(mockProduct2) // 5000 x 1
    })

    expect(result.current.totalItems).toBe(3)
    expect(result.current.totalPrice).toBe(12000) // 7000 + 5000
  })

  it('should throw error when used outside provider', () => {
    expect(() => {
      renderHook(() => useCart())
    }).toThrow('useCart must be used within a CartProvider')
  })
})
