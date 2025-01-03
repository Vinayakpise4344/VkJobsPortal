import { AvatarImage } from '@/components/ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar } from '@radix-ui/react-avatar'
import { Edit2, MoreHorizontal } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Companies from './Companies'

const CompaniesTable = () => {
  const navigate = useNavigate()
  const {companies , searchCompanyByText } = useSelector(store => store.company);
  const [filterCompany, setFilterCompany] = useState(companies);
  useEffect(()=>{
    const filteredCompany =  companies.filter((company)=>{
        if(!searchCompanyByText){
            return true
        };
        return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());

    });
    setFilterCompany(filteredCompany);
},[companies,searchCompanyByText])
  return (
    <div>
        <Table>
                <TableCaption>A list of your recent registered companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                     {
                        filterCompany?.map((company) => (  
                            <tr>
                                <TableCell>
                                    <Avatar>
                                        <AvatarImage className="w-12" src="https://img.freepik.com/premium-vector/minimalist-type-creative-business-logo-template_1283348-23026.jpg?semt=ais_hybrid"/>
                                    </Avatar>
                                </TableCell>
                                <TableCell>{company.name}</TableCell>
                                <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            <div 
                                             onClick={()=> navigate(`/admin/Companies/${company._id}`)} 
                                            className='flex items-center gap-2 w-fit cursor-pointer'>
                                                <Edit2 className='w-3' />
                                                <span>Edit</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </tr>

                       ) 
                          ) 
                      }
                </TableBody>
        </Table>        
    </div>
  )
}

export default CompaniesTable