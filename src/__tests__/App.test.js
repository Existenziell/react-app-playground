import { invertStringSpecial } from "../util/invertStringSpecial"
import { rotateArray } from "../util/rotateArray"
import { downloadTime } from '../util/downloadTime'

describe('Utility function invertStringSpecial()', () => {
  it('reverts strings, but only letters', () => {
    expect(invertStringSpecial("abc*zy+_&kljh")).toEqual("hjl*ky+_&zcba")
    expect(invertStringSpecial("__aa**bb))cc")).toEqual("__cc**bb))aa")
    expect(invertStringSpecial("aaaa*bbb(cccc)eeeee6dddd")).toEqual("dddd*eee(eecc)ccbbb6aaaa")

  })
})

describe('Utility function rotateArray()', () => {
  it('rotates a given array k steps', () => {
    expect(rotateArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 0)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(rotateArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).toEqual([8, 9, 1, 2, 3, 4, 5, 6, 7])
    expect(rotateArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)).toEqual([6, 7, 8, 9, 1, 2, 3, 4, 5])
    expect(rotateArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)).toEqual([9, 1, 2, 3, 4, 5, 6, 7, 8])
    expect(rotateArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 18)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(rotateArray([1, 2, 3, 4, 5], 15)).toEqual([1, 2, 3, 4, 5])
    expect(rotateArray([1, 2, 3, 4, 5], 14)).toEqual([2, 3, 4, 5, 1])
    expect(rotateArray([1, 2, 3, 4, 5], 0)).toEqual([1, 2, 3, 4, 5])
  })
})

describe('Utility function downloadTime()', () => {
  it('calculates the remaining download time in minutes.', () => {
    expect(downloadTime(100, [10, 6, 6, 8], 2)).toEqual(10)
    expect(downloadTime(100, [10, 6, 6, 8, 20], 2)).toEqual(4)
    expect(downloadTime(1000, [10, 6, 6, 8, 20], 2)).toEqual(68)
    expect(downloadTime(10, [2, 3], 2)).toEqual(2)
    expect(downloadTime(0, [2, 3], 2)).toEqual(-1)
    expect(downloadTime(10, [2, 3], 0)).toEqual(-1)
    expect(downloadTime(10, [], 2)).toEqual(-1)
  })
})
