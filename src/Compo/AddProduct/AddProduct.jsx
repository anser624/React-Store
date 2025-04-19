import { useState } from 'react'; 
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { PhotoIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await addDoc(collection(db, 'products'), {
        name: product.name,
        description: product.description,
        price: parseFloat(product.price),
        imageUrl: product.imageUrl,
        createdAt: new Date()
      });
      setSuccess(true);
      setProduct({ name: '', description: '', price: '', imageUrl: '' });
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error adding product: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Add New Product</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            value={product.description}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price ($)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            min="0"
            step="0.01"
            value={product.price}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Image URL */}
        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
              <PhotoIcon className="h-5 w-5" />
            </span>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={product.imageUrl}
              onChange={handleChange}
              required
              className="focus:ring-green-500 focus:border-green-500 flex-1 block w-full rounded-none rounded-r-md border-gray-300 py-2 px-3"
              placeholder="https://example.com/image.jpg"
            />
          </div>
        </div>

        {/* Preview */}
        {product.imageUrl && (
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700">Image Preview</p>
            <img 
              src={product.imageUrl} 
              alt="Product preview" 
              className="mt-2 h-40 object-contain border rounded-md"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300?text=Invalid+URL';
              }}
            />
          </div>
        )}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${loading ? 'opacity-70' : ''}`}
          >
            {loading ? (
              <>
                <ArrowPathIcon className="animate-spin h-5 w-5 mr-2" />
                Adding...
              </>
            ) : 'Add Product'}
          </button>
        </div>

        {/* Success Message */}
        {success && (
          <div className="rounded-md bg-green-50 p-4">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">Success!</h3>
                <p className="text-sm text-green-700 mt-1">
                  Product has been added successfully.
                </p>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default AddProduct;