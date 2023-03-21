import express from 'express'
import { getRestraunts, createRestraunt, getByCuisine, getKoshers, findByCity, findAdressByName, findCoordsByName, findAndSortByName, findAndSortByCity, findById, updateRestrauntById, addreview, makeAllKosher, deleteById, printNames, printCities, printCoords, getbyletter, howMany, getAllAverage, getAverage } from '../controllers/restrauntController.js'

const router = express.Router();

router.route('/').get(getRestraunts).post(createRestraunt)
router.route('/getallavg').get(getAllAverage)
router.route('/avg/:name').get(getAverage)
router.route('/menu/:cuisine').get(getByCuisine)
router.route('/city/:city').get(findByCity)
router.route('/address/:name').get(findAdressByName)
router.route('/coords/:name').get(findCoordsByName)
router.route('/kosher').get(getKoshers)
router.route('/printnames').get(printNames)
router.route('/printcities').get(printCities)
router.route('/printcoords').get(printCoords)
router.route('/kosher/convertall').put(makeAllKosher)
router.route('/sortbyname').get(findAndSortByName)
router.route('/sortbycity').get(findAndSortByCity)
router.route('/count').get(howMany)
router.route('/:id').get(findById).put(updateRestrauntById).delete(deleteById)
router.route('/:id/addreview').put(addreview)
router.route('/advanced/:letter').get(getbyletter)



export default router