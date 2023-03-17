describe("search", () => {
    let tree = new BinarySearchTree
    tree.insert(10)
    tree.insert(5)
    tree.insert(0)

    it("should have size 3 after inserting 3 times", () => {
        expect(tree.length()).toEqual(3)
    })

    tree.remove(5)

    it("should have size 2 after removing 1 time", () => {
        expect(tree.length()).toEqual(2)
    })

    it("should be able to find a node", () => {
        expect(tree.find(10).element).toEqual(10)
    })
})