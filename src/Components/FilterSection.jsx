import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import drop from '../assets/Icons/drop.svg';
import { Link } from 'react-router-dom';

const FilterSection = () => {
  const { setSelectedFilters } = useContext(ShopContext);
  const [openDropdowns, setOpenDropdowns] = useState({
    gender: false,
    size: false,
    men: false,
    women: false,
    shoes: false,
    curry: false,
    collection: false,
  });
  const [bestsellerOnly, setBestsellerOnly] = useState(false);

  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const applyFilter = (key, value) => {
    setSelectedFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="filter-section">
      <h3>Filter By</h3>

      <div className="main-filter"></div>
      {/* Category Dropdown */}
      <div className="dropdown">
        <button onClick={() => toggleDropdown('gender')} className='first-btn'>Category <img src={drop} alt="logo" /></button>
        {openDropdowns.gender && (
          <div className="dropdown-menu-one">
            <div  className="dropdown-new" onClick={() => applyFilter('category', 'New')}>New</div>
            
            {/* Men Subcategory */}
            <div className="dropdown">
              <button onClick={() => toggleDropdown('men')}>Men <img src={drop} alt="logo" /></button>
              {openDropdowns.men && (
                <div className="dropdown-menu">
                  {['Featured', 'Shop by Category', 'Shop by Sport', 'Shop by Collection'].map(size => (
                    <div key={size} onClick={() => applyFilter('size', size)}>
                      <Link><p>{size}</p></Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Women Subcategory */}
            <div className="dropdown">
              <button onClick={() => toggleDropdown('women')}>Women <img src={drop} alt="logo" /></button>
              {openDropdowns.women && (
                <div className="dropdown-menu">
                  {['Featured', 'Shop by Category', 'Shop by Sport', 'Shop by Collection'].map(size => (
                    <div key={size} onClick={() => applyFilter('size', size)}>
                      <Link><p>{size}</p></Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Shoes Subcategory */}
            <div className="dropdown">
              <button onClick={() => toggleDropdown('shoes')}>Shoes <img src={drop} alt="logo" /></button>
              {openDropdowns.shoes && (
                <div className="dropdown-menu">
                  {['Featured', 'Shop by Category', 'Shop by Sport', 'Shop by Collection'].map(size => (
                    <div key={size} onClick={() => applyFilter('size', size)}>
                     <Link><p>{size}</p></Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Curry Subcategory */}
            <div className="dropdown">
              <button onClick={() => toggleDropdown('curry')}>Curry <img src={drop} alt="logo" /></button>
              {openDropdowns.curry && (
                <div className="dropdown-menu">
                  {['Featured', 'Shop by Category', 'Shop by Sport', 'Shop by Collection'].map(size => (
                    <div key={size} onClick={() => applyFilter('size', size)}>
                     <Link><p>{size}</p></Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Collection Subcategory */}
            <div className="dropdown">
              <button onClick={() => toggleDropdown('collection')}>Collection <img src={drop} alt="logo" /></button>
              {openDropdowns.collection && (
                <div className="dropdown-menu">
                  {['UA Forge 96', 'Curry Brand', 'Project Rock', 'UA Infinite'].map(size => (
                    <div key={size} onClick={() => applyFilter('size', size)}>
                      <Link><p>{size}</p></Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Size Dropdown */}
      <div className="dropdown">
        <button className='first-btn' onClick={() => toggleDropdown('size')}>Sort by<img src={drop} alt="logo" /></button>
        {openDropdowns.size && (
          <div className="dropdown-menu-one">
            {['Newest', 'Top sellers', 'Price High to Low', 'Price Low to High'].map(size => (
              <div key={size} onClick={() => applyFilter('size', size)}>
                <Link><p>{size}</p></Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bestseller Checkbox */}
      <div className="filter-checkbox">
        <label>
          <input
            type="checkbox"
            checked={bestsellerOnly}
            onChange={(e) => {
              setBestsellerOnly(e.target.checked);
              applyFilter('bestseller', e.target.checked);
            }}
          />
        </label>
          <p>Bestseller Only</p>
      </div>
    </div>
  );
};

export default FilterSection;
