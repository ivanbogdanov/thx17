const swift_code = [
'let requestURL: NSURL = NSURL(string: \"http://www.salesforce.com\")!',
'let urlRequest: NSMutableURLRequest = NSMutableURLRequest(URL: requestURL)',
'let session = NSURLSession.sharedSession()',
'let task = session.dataTaskWithRequest(urlRequest) {',
'    (data, response, error) -> Void in',
'    let httpResponse = response as! NSHTTPURLResponse',
'    let statusCode = httpResponse.statusCode',
'    if (statusCode == 200) {',
'        print("Everyone is fine, file downloaded successfully.")',
'        do{',
'            let json = try NSJSONSerialization.JSONObjectWithData(data!, options:.AllowFragments)',
'               ...',
'               ...',
'               ...',

/*
'            if let stations = json["stations"] as? [[String: AnyObject]] {',
'                for station in stations {',
'                    if let name = station["stationName"] as? String {',
'                        if let year = station["buildYear"] as? String {',
'                            print(name,year)',
'                        }',
'                    }',
'                }',
'            }',
*/
'        }catch {',
'            print("Error with Json: \(error)")',
'        }',
'    }',
'}'
];

export default swift_code
