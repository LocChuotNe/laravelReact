export default function UserGroups() {
    return (
        <div className="intro-y box p-5">
        {/* Product Name */}
        <div>
            <label htmlFor="crud-form-1" className="form-label">
            Product Name
            </label>
            <input
            id="crud-form-1"
            type="text"
            className="form-control w-full"
            placeholder="Input text"
            />
        </div>

        {/* Category */}
        <div className="mt-3">
            <label htmlFor="crud-form-2" className="form-label">
            Category
            </label>
            <select
            id="crud-form-2"
            multiple
            className="tom-select w-full"
            defaultValue={["1", "3"]}
            >
            <option value="1">Sport & Outdoor</option>
            <option value="2">PC & Laptop</option>
            <option value="3">Smartphone & Tablet</option>
            <option value="4">Photography</option>
            </select>
        </div>

        {/* Quantity */}
        <div className="mt-3">
            <label htmlFor="crud-form-3" className="form-label">
            Quantity
            </label>
            <div className="input-group">
            <input
                id="crud-form-3"
                type="text"
                className="form-control"
                placeholder="Quantity"
                aria-describedby="input-group-1"
            />
            <div id="input-group-1" className="input-group-text">
                pcs
            </div>
            </div>
        </div>

        {/* Weight */}
        <div className="mt-3">
            <label htmlFor="crud-form-4" className="form-label">
            Weight
            </label>
            <div className="input-group">
            <input
                id="crud-form-4"
                type="text"
                className="form-control"
                placeholder="Weight"
                aria-describedby="input-group-2"
            />
            <div id="input-group-2" className="input-group-text">
                grams
            </div>
            </div>
        </div>

        {/* Price */}
        <div className="mt-3">
            <label className="form-label">Price</label>
            <div className="sm:grid grid-cols-3 gap-2">
            <div className="input-group">
                <div id="input-group-3" className="input-group-text">
                Unit
                </div>
                <input
                type="text"
                className="form-control"
                placeholder="Unit"
                aria-describedby="input-group-3"
                />
            </div>

            <div className="input-group mt-2 sm:mt-0">
                <div id="input-group-4" className="input-group-text">
                Wholesale
                </div>
                <input
                type="text"
                className="form-control"
                placeholder="Wholesale"
                aria-describedby="input-group-4"
                />
            </div>

            <div className="input-group mt-2 sm:mt-0">
                <div id="input-group-5" className="input-group-text">
                Bulk
                </div>
                <input
                type="text"
                className="form-control"
                placeholder="Bulk"
                aria-describedby="input-group-5"
                />
            </div>
            </div>
        </div>

        {/* Active Status */}
        <div className="mt-3">
            <label className="form-label">Active Status</label>
            <div className="form-switch mt-2">
            <input type="checkbox" className="form-check-input" />
            </div>
        </div>

        {/* Description */}
        <div className="mt-3">
            <label className="form-label">Description</label>
            <div className="mt-2">
            <div className="editor border rounded-md p-3 bg-gray-50 min-h-[100px]">
                <p>Content of the editor.</p>
            </div>
            </div>
        </div>

        {/* Buttons */}
        <div className="text-right mt-5">
            <button
            type="button"
            className="btn btn-outline-secondary w-24 mr-1"
            >
            Cancel
            </button>
            <button type="button" className="btn btn-primary w-24">
            Save
            </button>
        </div>
        </div>
    );
}
