import addition from '@/components/addition';

describe('addition', () => {
  it('should return correct', () => {
    const result = addition(1, 2);
    expect(result).toEqual(3);
  })
})
