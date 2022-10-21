import { invertStringSpecial } from "../util/invertStringSpecial"
import { rotateArray } from "../util/rotateArray"

describe('Utility function invertStringSpecial()', () => {
  it('reverts strings, but only letters', () => {
    expect(invertStringSpecial("abc*zy+_&kljh")).toEqual("hjl*ky+_&zcba")
    expect(invertStringSpecial("__aa**bb))cc")).toEqual("__cc**bb))aa")
  })
})

describe('Utility function rotateArray()', () => {
  it('rotates a given array k steps', () => {
    expect(rotateArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 0)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(rotateArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).toEqual([8, 9, 1, 2, 3, 4, 5, 6, 7])
    expect(rotateArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)).toEqual([6, 7, 8, 9, 1, 2, 3, 4, 5])
    expect(rotateArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)).toEqual([9, 1, 2, 3, 4, 5, 6, 7, 8])
  })
})
